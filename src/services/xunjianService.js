import request from '../utils/request'

class xunjianService {

    testdata () {
        return request({
            url: '',
            method: 'get'
        })
    }

    getTunnel () {
        return request({
            url: '',
            method: 'get'
        })
    }

    getXunjianList(){
        return request({
            url: '',
            method: 'get'
        })
    }

    getXunjianItems(){
        return request({
            url: '',
            method: 'get'
        })
    }

    getXunjianItemsItem(){
        return request({
            url: '',
            method: 'get'
        })
    }

    addXunjianRecordItem(params){
        return request({
            url: '/equDetect/addSingleInspectRecord',
            method: 'post',
            params: params
        })
    }

    getAllDevice(){
        return request({
            url: '/mobile/selectAllEquips',
            method: 'get'
        })
    }

    getAllTunnel(){
        return request({
            url: '/mobile/selectSection',
            method: 'get'
        })
    }

}


export default new xunjianService()