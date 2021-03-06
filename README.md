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

### 寫了個 TodoList 的筆記
1. 當我只有某一個元件需要的數據時，就將數據放在該元件的 state 中
2. 當我有多個元件都需要用到的數據時，就將數據放在共同父元件的 state 中
3. 父元件傳遞給子元件數據時，直接透過 props 傳
4. 子元件傳遞給付元件數據時，父元件需提前傳一個方法給子元件
5. state 在哪裡，操作state 的方法就在哪裡

### 關於 github search App

PubSub 套件 :
可用於任意元件之間的通信，以該案例來說，原先需要透過父元件來進行交互，透過消息訂閱發布則可以直接將狀態放在 searchResult 的元件內，在 search 元件內 publish 消息，searchResult 即可接收資料並 setState 去 render

### 關於路由

####  SPA single page application
以往多頁面就會有多支 html 檔，單頁面應用透過 React Router 實現單頁面的完整應用，點擊頁面連結不會導致頁面 reload，全部透過部分更新完成，資料都透過 AJAX 在前端異步呈現

#### React Router

路由元件與一般元件差異 :
1. 寫法不同，一般 <Demo/>，路由 <Route path='/home' element={<Home/>} />
2. 檔案位置不同，一般放 components，路由放 pages
3. 接收的 props 不同，一般傳啥接啥，路由固定接收 match location history


Link => NavLink 他會幫我自動的把被點擊到的對象添加 active class

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
