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

    /**
     * 获取隧道下的巡检记录
     * @param {*} params 传入隧道code
     * params.pageNo
     * params.pageSize
     * params.sectionCode
     * params.startTime
     * params.endTime
     */
    getXunjianList(params){
        return request({
            url: '',
            method: 'get',
            params: params
        })
    }

    /**
     * 获取某条巡检记录的详情
     * @param {*} params 巡检记录id【timestamp】
     * params.pageNo
     * params.pageSize
     * params.timestamp
     */
    getXunjianItems(params){
        return request({
            url: '',
            method: 'get',
            params: params
        })
    }

    /**
     * 获取某条巡检记录的详情的item的详情
     * @param {*} params 
     * params.equipCode
     * params.timestamp
     */
    getXunjianItemsItem(params){
        return request({
            url: '',
            method: 'get',
            params: params
        })
    }

    /**
     * 添加一条巡检记录的记录
     * @param {*} params 
     *  params.equipCode = this.code
        params.serverity = '1'
        params.symptom = problem
        params.timestamp = new Date().getTime()
        params.solutionCode = '1'
        params.imageUrl = imgs
     */
    addXunjianRecordItem(params){
        return request({
            url: '/equDetect/addSingleInspectRecord',
            method: 'post',
            params: params
        })
    }

    /**
     * 获取所有的东西【隧道，设备类型，设备】
     */
    getAllDevice(){
        return request({
            url: '/mobile/selectAllEquips',
            method: 'get'
        })
    }

    /**
     * 获取隧道
     */
    getAllTunnel(){
        return request({
            url: '/mobile/selectSection',
            method: 'get'
        })
    }

}


export default new xunjianService()