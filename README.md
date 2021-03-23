# Aternos AFKBot
This afk bot will keep your aternos server alive 24/7

You can deploy this AFKBot to your heroku application

# Setup
1. Fork this repository, or clone the repository and make it your own
2. Change the config file to your own aternos server
3. Go to https://dashboard.heroku.com/ and create a new application
4. Once you've created your application, simply go to the "Deploy" section and select the repository that you forked
5. Select master and click on "Deploy Branch"
6. Click on the "More" button at the top and click "Restart all Dynos"
7. Done! Enjoy your free 24/7 aternos server

# Keeping your application alive
We all know how awesome Heroku is. Simplicity in creating environments for your rails, java, python or php application is just unbelievable.
Create, deploy, BOOM! Your new app is ready, up and running! But if your site is powered by only 1 dyno, you will quickly notice that after a few hours of app's inactivity, it's first launch takes ages and ages... It is because your dyno was sleeping and now it has to be awakened.

To keep your application alive Please read the following steps
1. Go to https://wakemydyno.com
2. Submit your application (eg. APPLICATION_NAME.herokuapp.com)
3. All done!

# !! CAUTION !!
Aternos might detect your behavior and they might delete your account!

You are responsible for your own actions. I do not recommend doing this on your main aternos server!
