# Building

## For Android
To build the app run `yarn build`. The **dist** folder will be generated. Inside the ** dist** folder there will be an index.html and a folder called **android_resources**. Copy the content of the **android_resouces** folder and paste it into the **dist** folder, so that it's next to index.html.

*This has to be done because Android needs src paths to start with **/android_resources/**, but eventually this step will be automated.*

Now open the Android project files and copy the content of the **dist** folder the **src/main/assets/**.
