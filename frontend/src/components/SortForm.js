import React from 'react'

const SortForm = ({ form, handleInputChange }) => {
  return (
    <form className="form-inline">
      Sort by:&nbsp;
      <select className="form-control" name="by" value={ form.by } onChange={ handleInputChange }>
        <option value="SORT_BY_SCORE">Score</option>
        <option value="SORT_BY_DATE">Date</option>
      </select>&nbsp;
      <select className="form-control" name="order" value={ form.order } onChange={ handleInputChange }>
        <option value="ASC">Ascending</option>
        <option value="DESC">Descending</option>
      </select>
    </form>
  )
}

export default SortForm
