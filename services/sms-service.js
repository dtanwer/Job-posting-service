exports.sendSms = async (phoneNumber, message) => {
    console.log("SMS send !");
    // try {
    //     if (!phoneNumber || !message) {
    //         throw new Error('Missing required fields');
    //     }

    //     const accountSid = process.env.TWILIO_ACCOUNT_SID;
    //     const authToken = process.env.TWILIO_AUTH_TOKEN;

    //     const client = require('twilio')(accountSid, authToken);
    //     client.verify.v2.services("VA7e6919d1fe2655dde5907f413ad025ca")
    //   .verifications
    //   .create({to: '+917027682119', channel: 'sms'})
    //   .then(verification => console.log(verification.sid));
    //     console.log('SMS sent successfully');
    // } catch (error) {
    //     console.log("Unable to Send SMS", error.message)
    //     throw error;
    // }
}