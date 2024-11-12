const base = {
    get() {
        return {
            url : "http://localhost:8080/xianlvyouxitong/",
            name: "xianlvyouxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xianlvyouxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "西安旅游系统"
        } 
    }
}
export default base
