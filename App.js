import { SafeAreaView, Text, View } from 'react-native'
import React, { Component } from 'react'
import Main from './src/Main'
import Footer from './src/Footer'
import SpendingLimit from './src/SpendingLimit'
import { GETFUNCTION } from './src/Middleware/MiddleWare'

export default class App extends Component {
  state = {
    isLimitScreen: false,
    SpendLimit: 0,
    Limit: 0,
    Percent: 0,
    isChecked: false
  }

  LimitScreen = () => {
    this.setState({ isLimitScreen: !this.state.isLimitScreen })
  }
  SaveSpend = async (e) => {
    try {

      let Limit = await GETFUNCTION(`web/GetRandomNumber?max=${e}`)
      this.setState({ Limit: Limit.data, Percent: Limit.percent, SpendLimit: e, isLimitScreen: false, isChecked: true })

    } catch (error) {

    }
  }
  removeChecked = () => {
    this.setState({ isChecked: false })
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
        {this.state.isLimitScreen ?
          <SpendingLimit
            LimitScreen={this.LimitScreen}
            SaveSpend={this.SaveSpend} />
          :
          <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
          <Main
            LimitScreen={this.LimitScreen}
            SpendLimit={this.state.SpendLimit}
            Percent={this.state.Percent}
            isChecked={this.state.isChecked}
            Limit={this.state.Limit}
            removeChecked={this.removeChecked}
          />
        <Footer />
          </SafeAreaView>
        }
      </SafeAreaView>
    )
  }
}