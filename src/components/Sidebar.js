import React, { Component } from 'react'
import { Icon, Menu, Sidebar } from 'semantic-ui-react'

export default class SidebarExampleDimmed extends Component {
  state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state
    const { scrollToRef } = this.props
    const items = [{
        label: 'Close',
        icon: 'close',
        onClick: this.handleHideClick
    },
    {
        label: 'Home',
        icon: 'home',
        onClick: () =>  {
            scrollToRef('hero')
            this.handleHideClick()
        }
    },
    {
        label: 'Events',
        icon: 'calendar',
        onClick: () =>  {
            scrollToRef('events')
            this.handleHideClick()
        }
    },
    {
        label: 'Music',
        icon: 'music',
        onClick: () =>  {
            scrollToRef('music')
            this.handleHideClick()
        }
    },
    {
        label: 'About',
        icon: 'user',
        onClick: () =>  {
            scrollToRef('about')
            this.handleHideClick()
        }
    }]    

    return (
      <React.Fragment>
        <Icon name='bars' style={{paddingTop:7, color:'#cecece', position:'fixed', fontSize:38, top: 15, left: 10, zIndex:10, display: !visible ? 'initial': 'none'}} onClick={this.handleShowClick}/>
        <Sidebar as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'>
            {items.map(i => (
                <Menu.Item style={{fontSize:20}} as='a' onClick={i.onClick}>
                    {i.icon ? <Icon name={i.icon} /> : null}
                    {i.label}
                </Menu.Item>
            ))}
        </Sidebar>
      </React.Fragment>
    )
  }
}