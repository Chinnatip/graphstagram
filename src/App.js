import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout } from 'antd'
import Main from './page/Main'
import Polls from './page/Polls'
import Dashboard from './page/Dashboard'
import Project from './page/Project'
import Customer from './page/Customer'
import Quotation from './page/Quotation'
import TimeShift from './page/TimeShift'
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
            <Route path="/polls" component={Polls} />
            <Route path="/main" component={Main} />
            <Route path="/content" component={ContentX} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/projects" component={Project} />
            <Route path="/quotation" component={Quotation} />
            <Route path="/timeshift" component={TimeShift} />
            <Route path="/customer" component={Customer} />
          </Content>
        </Layout>
      </div>
    </Router>
  )
}

export default App
