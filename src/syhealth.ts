import SyHealth from './core/index'
import { SyHealthInstance } from './types/index'
import { extend } from './helpers/util'

function initSyHealth(config: any): SyHealth {
  const syHealth = new SyHealth(config)
  return syHealth
}

/***
 * 混合对象函数
 * 提供初始化syHealth(config),并且继承了SyHealth的全部方法
 * 为后续版本提供了默认config配置入口
 */
function createInstance(config: any): SyHealthInstance {
  const context = new SyHealth(config)
  const instance = initSyHealth.bind(context)

  extend(instance, context)

  return instance as SyHealthInstance
}

const syHealth = createInstance({})
// syHealth.create = function create(config) {
//   return createInstance(config)
// }

export default syHealth
