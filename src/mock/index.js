import Mock from 'mockjs'

export default {
  mockData () {
    Mock.mock('/api/user/login', {
      'success': true,
      'result': {
        'token': 'fdsjfhjkdshfkldsajfjasdfbjsdkfhsdajfj'
      }
    })
    Mock.mock('/api/user/register', {
      'success': true,
      'result': {
        'token': 'fdsjfhjkdshfkldsajfjasdfbjsdkfhsdajfj'
      }
    })
    Mock.mock('/api/user/info', {
      'success': true,
      'result': {
        'id': '100001',
        'name': '林锦泽',
        'roles': ['admin'],
        'permissions': [
          {
            // 一个路径一个对象，路径名为完整路径名
            path: '/index'
          }, {
            path: '/table',
            // permission存储数据级权限控制
            permission: ['modify', 'delete']
          }, {
            path: '/forms/base'
          }, {
            path: '/forms/edit'
          }, {
            path: '/charts'
          }, {
            path: '/drag'
          }, {
            path: '/user/language'
          }, {
            path: '/user/theme'
          }, {
            path: '/user/password'
          }
        ]
      },
      'error': {
        'code': 100000,
        'message': '无效的token'
      }
    })
    Mock.mock('/api/user/changePassword', {
      'success': true,
      'result': {
        'token': 'fdsjfhjkdshfkldsajfjasdfbjsdkfhsdajfj'
      }
    })
  }
}
