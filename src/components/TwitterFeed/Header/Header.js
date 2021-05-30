import React from 'react'
import { Button, Grid, Input, Message } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import './Header.css'

const Header = props => {
  return (
    <div className='header-container'>
      <Grid className='search-container'>
        <Grid.Column width={9}>
          <Input id='searchInput' placeholder='Search...' type="hidden" fluid />
        </Grid.Column>
        <Grid.Column width={7}>
        </Grid.Column>
      </Grid>
    </div>
  )
}

Header.propTypes = {
  term: PropTypes.string.isRequired,
  updateSearchTerm: PropTypes.func.isRequired
}

export default Header
