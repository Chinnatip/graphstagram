import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout } from 'antd'
import Main from './page/Main'
import ContentX from './page/Content'
import Intro from './page/Intro'
import HeaderX from './components/Header'
const { Header, Footer, Sider, Content } = Layout

function App() {
  return (
    <Router>
      <div>
        <Layout>
          <Content>
            <Route exact path="/" component={Intro} />
            <Route path="/main" component={Main} />
            <Route path="/content" component={ContentX} />
          </Content>
        </Layout>
      </div>
    </Router>
  )
}

export default App
