import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import glamorous from "glamorous"

const ResultsScreen = glamorous.ul({
  position: "absolute",
  top: "100%",
  left: "15px",
  right: "15px",
  overflow: "hidden",
  listStyleType: "none",
  background: "#FFF",
  zIndex: 10,
  border: "1px solid #000",
  borderTop: 0,
  padding: 0,
  marginTop: "-2px"
})

const Item = glamorous.li({
  padding: "5px",
  "&:hover": {
    background: "#F4F4F4"
  }
})

class Results extends PureComponent {
  render() {
    const { results, labelKey, onSelect, onMouseEnter, onMouseLeave } = this.props

    return (
      <ResultsScreen onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {results.map((r, i) => (
          <a href="#" onClick={e => {
            e.preventDefault()
            onSelect(r)
          }} key={i}>
            <Item>{r[labelKey]}</Item>
          </a>
        ))}
      </ResultsScreen>
    )
  }
}

Results.propTypes = {
  results: PropTypes.array,
  labelKey: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
}

export default Results
