import request from '@/utils/request'
export default {
getList() { return request({ url: '/gathering', method: 'get' }) },
getPageList(page,size) { return request({ url: `/gathering/${page}/${size}`, method: 'get' }) },
search(page,size,searchMap) { return request({ url: `/gathering/${page}/${size}`, method: 'post', data: searchMap }) }
}
