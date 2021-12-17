# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## 筆記在此

### 元件化流程

1. 拆分元件，想好合理的畫面拆分方式
2. 實現靜態的元件
3. 實現動態的元件

3-1 : 初始化資料內容
3-2 : 定義好資料結構及型別
3-3 : 保存於哪個元件中 ?
3-4 : 頁面交互 (事件監聽)


### 雜筆記
input:checked 的屬性若直接給的話會報錯，因為這種方式沒有綁定事件(onChange)會變成 read-only，所以需要綁定事件，或是"暫時"將 checked 改寫為 defaultChecked

子元件要傳遞給父元件時，父元件需透過 props 傳給子元件一個 func，讓子元件想往上傳遞時可以調用

狀態設定在哪一個元件裡，操作裝態的方法就應該也放在同一個元件裡

對接收的 props 進行限制
```JavaScript
static propTypes = {
  addTodo: PropTypes.func.isRequired
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
