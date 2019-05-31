import Vue from "vue";
import Vuex from "vuex";

// 需要注册vuex到vue中
Vue.use(Vuex);

//模块 中英文
const lang={
  state:{// //state 存储的状态信息   在state中去声明全局变量，可以通过 this.$store.state 访问
    type:"Cn"//EN 为英语 其它为中文
  },
  getters:{// 在getters中声明state中变量的计算函数，缓存计算后的数据， 通过 this.$store.getters 调用
    
  },
  mutations:{// 只能执行同步方法，不要去执行异步方法 通过 this.$store.commit 方法去调用
    setLangType(state,type){// mutations的第一个参数即为 state对象，并且可以向mutation传入额外的参数
      state.type=type;
    }
  },
  actions:{// 借助actions的手去 执行 mutations ， 通过  this.$store.dispatch 的方式调用
    setLangType(context,type){// 可以用来执行异步操作，可以跟踪异步数据状态变化
        context.commit("setType",type);
      }
  }
}

//模块 用户信息
const userInfo={
  state:{// //state 存储的状态信息   在state中去声明全局变量，可以通过 this.$store.state 访问
    userId:62,
    name:"admin",
    loginType:false,
    img:"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLU9EZibVoA68MaA9VWT2rHhrRXdQpXPcgJzq25pKYVfRVMjVggD7JatYCB5JUqvjqQkOSibb2qmNBg/132"
  },
  getters:{// 在getters中声明state中变量的计算函数，缓存计算后的数据， 通过 this.$store.getters 调用
    getUserId(state){
      return state.userId;
    },
    getUserInfo(state){
      return state;
    }
  },
  mutations:{// 只能执行同步方法，不要去执行异步方法 通过 this.$store.commit 方法去调用
    setUserInfo(state,{name,loginType}){// mutations的第一个参数即为 state对象，并且可以向mutation传入额外的参数
      state.name=name;
      state.loginType=loginType;
    }
  },
  actions:{// 借助actions的手去 执行 mutations ， 通过  this.$store.dispatch 的方式调用
      setUserInfo(context,info){// 可以用来执行异步操作，可以跟踪异步数据状态变化
        context.commit("setUserInfo",info);
      }
  }
}

// 使用 es6 语法把vuex的实例对象输出
export default new Vuex.Store({
  modules:{
    userInfo:userInfo,
    // lang:lang,
  }
})