const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

const errors = {
    'SERVER_ERR': {
        status: "-1",
        message: "there is some server error"
    },
    'FIRSTNAME_ERR': {
        status: "-1",
        message: "Error in Firstname"
    },
    'LASTNAME_ERR': {
        status: "-1",
        message: "Error in lastname"
    },
    'EMAIL_ERR': {
        status: "-1",
        message: "Error in email"
    },
    'PASSWORD_ERR': {
        status: "-1",
        message: "Error in password"
    },
    'OTHER_ERR': {
        status: "-1",
        message: "Other error"
    },
    'USER_EXIST': {
        status: "-1",
        message: "User already exist"
    }
};
const succes = {
    'SUCCESS': {
        status: "1",
        message: "there is no error"
    },
    'VALID_USER': {
        status: "1",
        message: ""
    },

};

module.exports = (app) => {
    app.post('/api/signup', (req, res, next) => {
        const {body} = req;
        let {
            firstname,
            lastname,
            email,
            password
        } = body;
        console.log(firstname);
        console.log(lastname);
        console.log(email);
        console.log(password);
        if (!firstname) {
            return res.send(errors.FIRSTNAME_ERR);
        }
        if (!lastname) {
            return res.send(errors.LASTNAME_ERR);
        }
        if (!email) {
            return res.send(errors.EMAIL_ERR);
        }
        if (!password) {
            return res.send(errors.PASSWORD_ERR);
        }
        email = email.toLowerCase();
        User.find({
            email: email
        }, (err, previousUsers) => {
            if (err) return res.send(errors.OTHER_ERR);
            if (previousUsers.length > 0) return res.send(errors.USER_EXIST);
            const new_user = new User();
            new_user.email = email;
            new_user.firstname = firstname;
            new_user.lastname = lastname;
            new_user.password = new_user.generateHash(password);

            new_user.save((err, user) => {
                if (err) return res.send(errors.OTHER_ERR);
                return res.send({
                    success: true,
                    message: "Signed up !"
                });
            });
        })

    });
    app.post('/api/signin',(req,res)=>{
        const {body}=req;
        let {
            email,
            password
        }=body;
        if(!email)return res.send(errors.OTHER_ERR);
        if(!password)return res.send(errors.OTHER_ERR);
        email=email.toLowerCase();
        User.find({email:email},(err,users)=>{
            if(err)return res.send(errors.OTHER_ERR);
            if(users.length !== 1)return res.send(errors.OTHER_ERR);

            const user=users[0];
            if(!user.validPassword(password)){
                return res.send({
                    success:false,
                    message:"Password does'nt match"
                });
            }
            const userSession=new UserSession();
            userSession.userId=user._id;
            userSession.save((err,docs)=>{
                if(err)return res.send(errors.OTHER_ERR);
                return res.send({
                    success: true,
                    message:'Valid Sign In',
                    token:docs._id
                })
            });
        });
    });
    app.post('/api/verify', function (req, res, next) {});
    app.get('/api/signup',(req,res,next)=>{

        res.send({error:"ee"});
    });
};
