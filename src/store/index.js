import Vue from "vue"
import Vuex from "vuex"
import {goodsList,imgList} from '../datas/goodsData'
Vue.use(Vuex)
let store=new Vuex.Store({
    state:{
        goodsList,
        imgList,
        cartList:[]
    },
    mutations:{
        addCart(state,data){
            let boff=true;
            state.cartList.forEach(item=>{
                // 若商品存在则添加数量
                if (item.id==data.id) {
                    item.count++;
                    boff=false;
                }
            })
            if (boff) {
                Vue.set(data,"count",1);
                state.cartList.push(data);
            }
        },
        changeCount(state,data){
            if (data.flag==0) {
                if (state.cartList[data.index].count>1) {
                    state.cartList[data.index].count--;
                }else{
                    state.cartList.splice(data.index,1);
                }
            }else{
                state.cartList[data.index].count++;
            }
        },
        delCart(state,index){
            state.cartList.splice(index,1);
        },
        showPop(state){
            state.isShowCart=!state.isShowCart;
        }
    },
    actions:{
        addAction(context,data){
            context.commit("addCart",data);
        },
        changeAction(context,data){
            context.commit("changeCount",data);
        },
        delAction(context,index){
            context.commit("delCart",index);
        },
        popAction(context){
            context.commit("showPop");
        }
    },
    getters:{
        totalPrice(state){
            return state.cartList.reduce((totalPrice,item)=>totalPrice+item.price*item.count,0);
        },
        totalCount(state){
            let totalCount=0;
            state.cartList.forEach(item=>{
                totalCount+=item.count
            });
            return totalCount;
        }
    }
})
export default store