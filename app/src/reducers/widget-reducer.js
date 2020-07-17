import * as types from "../actions/action-types";
import _ from "lodash";

const initialState = {
  widgets: []
};

export default function widgetReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_WIDGETS_SUCCESS:
      return [
        ...state,
        {
          widgets: action.widgets
        }
      ];
    case types.DELETE_WIDGET_SUCCESS:
      // Use lodash to create a new widget array without the widget we want to remove
      const newWidgets = _.filter(state.widgets, widget => widget.id !== action.widgetId);
      return [
        ...state,
        {
          widgets: newWidgets
        }
      ];
    default:
      return state;
  }
}
