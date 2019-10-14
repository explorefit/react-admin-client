import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './login.css';
import logo from './images/logo.png'


/**
 * 用户登录的路由组件
 */
class Login extends Component {

    handleSubmit = e =>{
        // 阻止默认提交事件
        e.preventDefault();
        // 统一校验
        this.props.form.validateFields((err, values) => {
            if (!err) {
              console.log('校验成功: ', values);
            }else{
                console.log("校验失败")
            }
          });

        // 获取表单数据
        // const form = this.props.form;
        // const value = form.getFieldsValue();
        // console.log("handleSubmit()",value);
    }
/*
用户名 / 密码的的合法性要求
1). 必须输入
2). 必须大于 4 位
3). 必须小于 12 位
4). 必须是英文、数组或下划线组成
*/
    render() { 
        const { getFieldDecorator } = this.props.form;
        return ( 
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="管理系统"/>
                    <h1>React 项目: 后台管理系统</h1>
                </header>
                <section className="login-context">
                    <h3>用户登陆</h3>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                // 声明式验证：直接使用别人定义好的验证规则进行验证
                                rules: [
                                    { required: true, message: '请输入用户名' },
                                    { max: 12, message: '用户名最长12位' },
                                    { min: 4, message: '用户名最短4位' },
                                    { pattern: /^[a-zA-Z0-9_]+$/, message: '必须是英文、数组或下划线组成' }
                                ],
                            })(
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="密码"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
         );
    }
}
/**
 * 1 高阶函数
 *      1）一类特别的函数
 *          a. 接收函数类型的参数
 *          b. 返回值是函数
 *      2）常见
 *          a. 定时器： setTimeout()/setInterval()
 *          b. Promise: Promise(()=>{}) then(value=>{},reason=>{})
 *          c. 数组遍历相关的方法：forEach()/filter()/map()/reduce()/find()/findIndex()
 *          d. 函数对象的bind()
 *          e. form.create()() / getFieldDecorator()()
 *      3）高阶函数更新动态，更具有扩展性
 * 
 * 2 高阶组件
 *      1）本质就是一个函数
 *      2）接收一个组件（被包装组件），返回一个新的组件（包装组件），包装组件会向被包装组件传入特定属性
 *      3）作用：扩展组件的功能
 *      4）高阶组件也是高阶函数：接收一个组件函数，返回一个新的组件函数
 */
export default Form.create()(Login)