import xFetch, {
    get,
    post
} from '../util/xFetch';
// 查询服务列表


export const demo = async ({
    page, type
    }) =>
    get('/shopro/data/record.json', { page, type });
