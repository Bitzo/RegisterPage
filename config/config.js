/**
 * @Author: bitzo
 * @Date: 17-10-4 下午6:05
 * @Last Modified by: bitzo
 * @Last Modified time: 17-10-4 下午6:05
 * @Function:
 */
let config = {
    // 基本配置
    app_name: `taffeit`,
    app_version: `0.1.0`,
    app_description: `社团`,
    // 项目相关配置
    jwt_secret: 'b9i4tz4o',
    // 是否在开发中
    isdev: true,
    // 数据库配置
    mysql: {
        host: '115.159.201.83',
        user: 'bitzo',
        password: 'bitzo',
        database: 'taffeit',
        connectionLimit: 100,
        supportBigNumbers: true,
    }
};

module.exports = config;