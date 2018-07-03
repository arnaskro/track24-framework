/**
 * AWS script for deploying files, checking required env variables and list bucket contents
 * 
 * Dependencies: aws-sdk fs path dotenv bluebird make-runnable
 * Author: Arnas Kromelis <arnas.kromelis@track24.com>
 * Version: v1.2
 * Updates:
 * v1.0 - Initial script
 * v1.1 - Added recursive uploading for folders
 * v1.2 - Made uploaded files public readable & set the proper content-type for files
 */

const Promise = require('bluebird');
const AWS = require('aws-sdk');
const fs = require("fs"); // from node.js
const path = require("path"); // from node.js
const mime = require('mime-types');

require('dotenv').config(); // load env variables from .env

/**
 * Check if has all needed env variables
 */
const envCheck = function() {

    if (process.env.AWS_ROLE_ARN == null) {
        console.log("Missing AWS role (AWS_ROLE_ARN)")
        return false;
    } else if (process.env.AWS_ROLE_SESSION_NAME== null) {
        console.log("Missing AWS session name (AWS_ROLE_SESSION_NAME)")
        return false;
    } else if (process.env.AWS_REGION == null) {
        console.log("Missing AWS region (AWS_REGION)")
        return false;
    } else if (process.env.AWS_S3_BUCKET == null) {
        console.log("Missing S3 bucket name (AWS_S3_BUCKET)")
        return false;
    } else if (process.env.REMOTE_FOLDER == null) {
        console.log("Missing remote folder path (REMOTE_FOLDER)")
        return false;
    } else if (process.env.LOCAL_FOLDER == null) {
        console.log("Missing dist folder path (LOCAL_FOLDER)")
        return false;
    } else if (process.env.AWS_ACCESS_KEY_ID == null) {
        console.log("Missing AWS access key (AWS_ACCESS_KEY_ID)")
        return false;
    } else if (process.env.AWS_SECRET_ACCESS_KEY == null) {
        console.log("Missing AWS secret (AWS_SECRET_ACCESS_KEY)")
        return false;
    }

    return true;
}

/**
 * Initializes AWS & configures credentials
 */
const init = function () {

    // Set role
    var params = {
        RoleArn: process.env.AWS_ROLE_ARN,
        RoleSessionName: process.env.AWS_ROLE_SESSION_NAME
    };
    
    // Configure AWS
    AWS.config.setPromisesDependency(Promise);
    AWS.config.region = process.env.AWS_REGION;
    AWS.config.credentials = new AWS.EnvironmentCredentials('AWS');
    AWS.config.credentials = new AWS.TemporaryCredentials(params);

    return AWS;
};

/**
 * Lists objects in bucket
 */
const list = function() {
    if (!envCheck()) return "Failed";

    var AWS = init();           // Initialize AWS
    var s3 = new AWS.S3();      // Initialize S3

    // Set params
    var params = {
        Bucket: process.env.AWS_S3_BUCKET,
        Prefix: process.env.REMOTE_FOLDER
    };

    if (params.Bucket == null) {
        console.log("Missing S3 bucket name")
        return "Failed"
    }

    // List objects
    s3.listObjectsV2(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);    
    })

    return "Output:";
}

/**
 * Upload objects into bucket
 */
const upload = function() {
    
    if (!envCheck()) return "Failed";

    var folder = process.env.LOCAL_FOLDER;
    var prefix = process.env.REMOTE_FOLDER;

    // fix prefix
    prefix = (prefix.lastIndexOf('/') == prefix.length - 1) ? prefix : prefix + '/';    // check if '/' is at the end
    prefix = (prefix.indexOf('/') == 0) ? prefix.substring(1, prefix.length) : prefix;  // remove '/' from the start

    // configuration
    const config = {
        bucketName: process.env.AWS_S3_BUCKET,
        remoteFolderPath: prefix,
        localFolderPath: folder, // path relative script's location
    };

    var AWS = init();           // Initialize AWS
    var s3 = new AWS.S3();      // Initialize S3

    
    // resolve full folder path
    const distFolderPath = path.join(__dirname, config.localFolderPath);

    const uploadDirFn = function(currFolder, prefix = '') {
        
        // get of list of files from 'dist' directory
        fs.readdir(currFolder, (err, files) => {
    
            if(!files || files.length === 0) {
                console.log(`provided folder '${currFolder}' is empty or does not exist.`);
                console.log('Make sure your project was compiled!');
                return;
            }
    
            // for each file in the directory
            for (const fileName of files) {
                
                // get the full path of the file
                let filePath = path.join(currFolder, fileName);
                
                // ignore if directory
                if (fs.lstatSync(filePath).isDirectory()) {
                    uploadDirFn(filePath, prefix + fileName + '/');
                } else {
                    // read file contents
                    fs.readFile(filePath, (error, fileContent) => {
                        // if unable to read file contents, throw exception
                        if (error) { throw error; }
                        
                        let key = config.remoteFolderPath + prefix + fileName;

                        // upload file to S3
                        s3.upload({
                            Bucket: config.bucketName,
                            Key: key,
                            Body: fileContent,
                            ContentType: mime.lookup(filePath),
                            ACL: 'public-read'
                        }, (err) => {
                            if (!err) {
                                console.log(`Successfully uploaded '${key}'!`);
                            } else {
                                console.log (err)
                            }
                        });
        
                    });
                }
    
            }
        });
    }

    uploadDirFn(distFolderPath);

    return "Output:";
}

module.exports = {
    init,
    list,
    upload,
    envCheck: envCheck
};

require('make-runnable/custom')({
    printOutputFrame: false
})