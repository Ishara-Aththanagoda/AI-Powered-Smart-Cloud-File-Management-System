import AWS from 'aws-sdk';
import s3Config from '../../cloud_config/aws_s3_config.json';

AWS.config.update({
    accessKeyId: s3Config.accessKeyId,
    secretAccessKey: s3Config.secretAccessKey,
    region: s3Config.region
});

const s3 = new AWS.S3();

export const uploadFileToS3 = async (file) => {
    const params = {
        Bucket: s3Config.bucketName,
        Key: file.name,
        Body: file
    };

    try {
        const uploadResult = await s3.upload(params).promise();
        return uploadResult.Location;
    } catch (error) {
        console.error("S3 Upload Error:", error);
        return null;
    }
};

