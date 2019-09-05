import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import ImageCard from '../common/ImageCard'
import '../../styleSheet/List.css'
class ListCategories extends React.Component {

    /* componentDidMount() {
        if (_.isEmpty(this.props.categories)){
                this.props.dispatch(startSetCategory())
            }
        } */
    render() {
        return (
            <div>
                <h3>Categories</h3>
                {_.isEmpty(this.props.categories) ? (<p>Loading</p>) :
                    (<div className="categoriesList">
                        {this.props.categories.map(category => <ImageCard name={category.name} id={category._id} key={category._id} resource="categories" />
                        )}

                    </div>
                    )}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    }
}

export default connect(mapStateToProps)(ListCategories)