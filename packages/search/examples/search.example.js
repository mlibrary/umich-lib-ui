import React from "react";
import Search from "../src";
import {
  Heading,
  TextInput,
  Button,
  Alert,
  List
} from '../../core'

export let name = "search";

class Results extends React.Component {
  render() {
    const {
      datastores
    } = this.props

    if (datastores) {
      const keys = Object.keys(datastores)

      return (
        <React.Fragment>
          {keys.map(key => (
            <React.Fragment>
              <Heading>{key}</Heading>
              <List type="numbered">
                {datastores[key].results.map(result => {
                  if (result) {
                    let record = ''
                    result.renderFull(data => {
                      record = data
                    })

                    const URI = `http://search.lib.umich.edu/${key}/record/${record.uid}`
                    return (
                      <li><a href={URI}>{record.names}</a></li>
                    )
                  } 

                  return <li>Loading...</li>
                })}
              </List>
            </React.Fragment>
          ))}
        </React.Fragment>
      )
    }

    return null
  }
}

export class Example extends React.Component {
  state = {
    query: ''
  }

  render() {
    return (
      <Search
        render={search => (
          <React.Fragment>
            {search.status && (
              <Alert>{search.status}</Alert>
            )}
            <Heading size="xlarge" level={1}>Library Search</Heading>
            <form onSubmit={(e) => {
              e.preventDefault()
              search.run({query: this.state.query})
            }}>
              <div className="layout-flex x-spacing">
                <TextInput
                  id="search-query"
                  labelText="Search terms"
                  type="search"
                  hideLabel
                  name="query"
                  value={this.state.query}
                  onChange={(e) => this.setState({ query: e.target.value })}
                />
                <Button type="submit">Search</Button>
              </div>
            </form>

            <Results {...search} />
          </React.Fragment>
        )}
      />
    )
  }
}