import React from 'react'
import { Pride } from 'pride'

/*
  The API endpoint that Pride will talk to.
*/
Pride.Settings.datastores_url = 'https://search.lib.umich.edu/spectrum'

/*
  TODO:
  - [ ] An explanation of this Component and 
        why it exists. 
  - [ ] Add an failed status. Consider this
        to trigger after a time/threashold
        has passed when waiting for Pride.
*/
class Search extends React.Component {
  state = {
    status: 'initializing'
  }

  /*
    Pride's Search Switcher will be set to this.
  */
  searcher = undefined

  setup = () => {
    /*
      Grab all the datastores from Pride.
      
      TODO
       - [ ] What is a datastore? Explain it here.
    */
    const datastores = Pride.AllDatastores.array

    /*
      For every datastore setup a Search object.
      These will be used to run Searches on and
      add event listeners to catch records being
      returned by a search.
    */
    const searches = datastores.map(datastore => {
      /*
        Create a search object from each
        Pride datastore.
      */
      const search = datastore.baseSearch()
      /*
        Setup results observers. These will be triggered
        when a search is run and results are available.

        We render out the full record and save the record
        data (not the Pride record) to be saved to state.
      */
      search.resultsObservers.add((results) => {
        this.setState({
          ...this.state,
          'datastores': {
            ...this.state.datastores,
            [datastore.get('uid')]: {
              results
            }
          }
        })
      })

      return search
    })

    /*
      Pass in first thing as the active datastore. Then the rest.
    */
    this.searcher = new Pride.Util.SearchSwitcher(searches[0], searches.slice(1, searches.length))
  }

  run = ({
    query
  }) => {
    this.searcher.set({
      field_tree: Pride.FieldTree.parseField('all_fields', query),
      page: 1,
      count: 10
    }).run()
  }
  
  componentDidMount() {
    /*
      Initialize Pride
    */
    Pride.init({
      success: () => {
        this.setState({
          status: 'success'
        })

        this.setup()
      },
      failure: () => {
        this.setState({
          status: 'failure'
        })
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.props.render({
          datastores: this.state.datastores,
          run: this.run,
          ...this.props
        })}
      </React.Fragment>
    )
  }
}

export default Search