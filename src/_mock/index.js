/**
 * `index.js` 文件的代码设置了一个用于在浏览器环境中模拟 API 请求的服务工作者（Service Worker），
 * 这对于测试和开发非常有用，因为它允许你在没有实际后端的情况下模拟 API 响应。
 *
 * 首先，代码从 `msw/browser` 模块中导入了 `setupWorker` 函数。这个函数用于创建一个服务工作者，它将拦截网络请求并返回模拟数据。
 *
 * ```javascript
 * import { setupWorker } from 'msw/browser';
 * ```
 * 接下来，代码从三个不同的模块中导入了模拟 API 处理程序：`_org`、`_user` 和 `_demo`。
 * 这些处理程序定义了具体的 API 端点以及它们应该返回的模拟响应。
 * ```javascript
 * import orgMockApi from './handlers/_org';
 * import userMockApi from './handlers/_user';
 * import demoMockApi from './handlers/_demo';
 * ```
 * 然后，使用扩展运算符将这些模块中的处理程序合并成一个数组。这个数组将包含服务工作者将用来拦截和响应网络请求的所有模拟处理程序。
 * ```javascript
 * const handlers = [...userMockApi, ...orgMockApi, ...demoMockApi];
 * ```
 * 调用 `setupWorker` 函数并传入合并后的处理程序数组，创建一个服务工作者实例。这个实例将根据提供的处理程序管理网络请求的拦截和模拟。
 * ```javascript
 * const worker = setupWorker(...handlers);
 * ```
 * 最后，创建的服务工作者实例被作为默认导出导出，使其可以在应用程序的其他部分中使用。
 * ```javascript
 * export default worker
 * ```
 * 总之，这段代码设置了一个包含各种 API 端点处理程序的模拟服务工作者，允许在开发和测试期间模拟 API 响应。
 **/

import orgMockApi from './handlers/_org';
import userMockApi from './handlers/_user';
import demoMockApi from './handlers/_demo';
import { setupWorker } from "msw/browser";

const handlers = [...userMockApi, ...orgMockApi, ...demoMockApi];
const worker = setupWorker(...handlers);

export default worker;
