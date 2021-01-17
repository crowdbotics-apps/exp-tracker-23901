import * as types from "./constants"

const initialState = {
  categories: [],
  expTrackerAPI: [],
  courses: [],
  customTexts: [],
  enrollments: [],
  events: [],
  groups: [],
  homePages: [],
  lessons: [],
  modules: [],
  paymentMethods: [],
  recordings: [],
  signups: [],
  subscriptions: [],
  subscriptionTypes: [],
  logins: [],
  passwordChanges: [],
  passwords: [],
  passwordResetConfirms: [],
  verifyEmails: [],
  userDetails: []
}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.API_V1_CATEGORY_LIST:
    case types.API_V1_CATEGORY_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        categories: [...state.categories, action.response]
      })
    case types.API_V1_CATEGORY_LIST_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_CATEGORY_CREATE:
    case types.API_V1_CATEGORY_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        categories: [...state.categories, action.response]
      })
    case types.API_V1_CATEGORY_CREATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_CATEGORY_READ:
    case types.API_V1_CATEGORY_READ_SUCCEEDED:
      return Object.assign({}, state, {
        categories: [
          ...state.categories.filter(
            record => record.id !== action.response.id
          ),
          action.response
        ]
      })
    case types.API_V1_CATEGORY_READ_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_CATEGORY_UPDATE:
    case types.API_V1_CATEGORY_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        categories: state.categories.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_CATEGORY_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_CATEGORY_PARTIAL_UPDATE:
    case types.API_V1_CATEGORY_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        categories: state.categories.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_CATEGORY_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_CATEGORY_DELETE:
    case types.API_V1_CATEGORY_DELETE_SUCCEEDED:
    case types.API_V1_CATEGORY_DELETE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_COURSE_LIST:
    case types.API_V1_COURSE_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        courses: [...state.courses, action.response]
      })
    case types.API_V1_COURSE_LIST_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_COURSE_CREATE:
    case types.API_V1_COURSE_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        courses: [...state.courses, action.response]
      })
    case types.API_V1_COURSE_CREATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_COURSE_READ:
    case types.API_V1_COURSE_READ_SUCCEEDED:
      return Object.assign({}, state, {
        courses: [
          ...state.courses.filter(record => record.id !== action.response.id),
          action.response
        ]
      })
    case types.API_V1_COURSE_READ_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_COURSE_UPDATE:
    case types.API_V1_COURSE_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        courses: state.courses.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_COURSE_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_COURSE_PARTIAL_UPDATE:
    case types.API_V1_COURSE_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        courses: state.courses.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_COURSE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_COURSE_DELETE:
    case types.API_V1_COURSE_DELETE_SUCCEEDED:
    case types.API_V1_COURSE_DELETE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_LIST:
    case types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        customTexts: [...state.customTexts, action.response]
      })
    case types.API_V1_CUSTOMTEXT_LIST_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_READ:
    case types.API_V1_CUSTOMTEXT_READ_SUCCEEDED:
      return Object.assign({}, state, {
        customTexts: [
          ...state.customTexts.filter(
            record => record.id !== action.response.id
          ),
          action.response
        ]
      })
    case types.API_V1_CUSTOMTEXT_READ_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_UPDATE:
    case types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        customTexts: state.customTexts.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_CUSTOMTEXT_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE:
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        customTexts: state.customTexts.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_ENROLLMENT_LIST:
    case types.API_V1_ENROLLMENT_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        enrollments: [...state.enrollments, action.response]
      })
    case types.API_V1_ENROLLMENT_LIST_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_ENROLLMENT_CREATE:
    case types.API_V1_ENROLLMENT_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        enrollments: [...state.enrollments, action.response]
      })
    case types.API_V1_ENROLLMENT_CREATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_ENROLLMENT_READ:
    case types.API_V1_ENROLLMENT_READ_SUCCEEDED:
      return Object.assign({}, state, {
        enrollments: [
          ...state.enrollments.filter(
            record => record.id !== action.response.id
          ),
          action.response
        ]
      })
    case types.API_V1_ENROLLMENT_READ_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_ENROLLMENT_UPDATE:
    case types.API_V1_ENROLLMENT_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        enrollments: state.enrollments.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_ENROLLMENT_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_ENROLLMENT_PARTIAL_UPDATE:
    case types.API_V1_ENROLLMENT_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        enrollments: state.enrollments.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_ENROLLMENT_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_ENROLLMENT_DELETE:
    case types.API_V1_ENROLLMENT_DELETE_SUCCEEDED:
    case types.API_V1_ENROLLMENT_DELETE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_EVENT_LIST:
    case types.API_V1_EVENT_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        events: [...state.events, action.response]
      })
    case types.API_V1_EVENT_LIST_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_EVENT_CREATE:
    case types.API_V1_EVENT_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        events: [...state.events, action.response]
      })
    case types.API_V1_EVENT_CREATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_EVENT_READ:
    case types.API_V1_EVENT_READ_SUCCEEDED:
      return Object.assign({}, state, {
        events: [
          ...state.events.filter(record => record.id !== action.response.id),
          action.response
        ]
      })
    case types.API_V1_EVENT_READ_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_EVENT_UPDATE:
    case types.API_V1_EVENT_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        events: state.events.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_EVENT_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_EVENT_PARTIAL_UPDATE:
    case types.API_V1_EVENT_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        events: state.events.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_EVENT_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_EVENT_DELETE:
    case types.API_V1_EVENT_DELETE_SUCCEEDED:
    case types.API_V1_EVENT_DELETE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_GROUP_LIST:
    case types.API_V1_GROUP_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        groups: [...state.groups, action.response]
      })
    case types.API_V1_GROUP_LIST_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_GROUP_CREATE:
    case types.API_V1_GROUP_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        groups: [...state.groups, action.response]
      })
    case types.API_V1_GROUP_CREATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_GROUP_READ:
    case types.API_V1_GROUP_READ_SUCCEEDED:
      return Object.assign({}, state, {
        groups: [
          ...state.groups.filter(record => record.id !== action.response.id),
          action.response
        ]
      })
    case types.API_V1_GROUP_READ_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_GROUP_UPDATE:
    case types.API_V1_GROUP_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        groups: state.groups.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_GROUP_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_GROUP_PARTIAL_UPDATE:
    case types.API_V1_GROUP_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        groups: state.groups.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_GROUP_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_GROUP_DELETE:
    case types.API_V1_GROUP_DELETE_SUCCEEDED:
    case types.API_V1_GROUP_DELETE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_LIST:
    case types.API_V1_HOMEPAGE_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        homePages: [...state.homePages, action.response]
      })
    case types.API_V1_HOMEPAGE_LIST_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_READ:
    case types.API_V1_HOMEPAGE_READ_SUCCEEDED:
      return Object.assign({}, state, {
        homePages: [
          ...state.homePages.filter(record => record.id !== action.response.id),
          action.response
        ]
      })
    case types.API_V1_HOMEPAGE_READ_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_UPDATE:
    case types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        homePages: state.homePages.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_HOMEPAGE_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE:
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        homePages: state.homePages.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_LESSON_LIST:
    case types.API_V1_LESSON_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        lessons: [...state.lessons, action.response]
      })
    case types.API_V1_LESSON_LIST_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_LESSON_CREATE:
    case types.API_V1_LESSON_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        lessons: [...state.lessons, action.response]
      })
    case types.API_V1_LESSON_CREATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_LESSON_READ:
    case types.API_V1_LESSON_READ_SUCCEEDED:
      return Object.assign({}, state, {
        lessons: [
          ...state.lessons.filter(record => record.id !== action.response.id),
          action.response
        ]
      })
    case types.API_V1_LESSON_READ_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_LESSON_UPDATE:
    case types.API_V1_LESSON_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        lessons: state.lessons.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_LESSON_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_LESSON_PARTIAL_UPDATE:
    case types.API_V1_LESSON_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        lessons: state.lessons.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_LESSON_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_LESSON_DELETE:
    case types.API_V1_LESSON_DELETE_SUCCEEDED:
    case types.API_V1_LESSON_DELETE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_LOGIN_CREATE:
    case types.API_V1_LOGIN_CREATE_SUCCEEDED:
    case types.API_V1_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_MODULE_LIST:
    case types.API_V1_MODULE_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        modules: [...state.modules, action.response]
      })
    case types.API_V1_MODULE_LIST_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_MODULE_CREATE:
    case types.API_V1_MODULE_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        modules: [...state.modules, action.response]
      })
    case types.API_V1_MODULE_CREATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_MODULE_READ:
    case types.API_V1_MODULE_READ_SUCCEEDED:
      return Object.assign({}, state, {
        modules: [
          ...state.modules.filter(record => record.id !== action.response.id),
          action.response
        ]
      })
    case types.API_V1_MODULE_READ_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_MODULE_UPDATE:
    case types.API_V1_MODULE_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        modules: state.modules.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_MODULE_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_MODULE_PARTIAL_UPDATE:
    case types.API_V1_MODULE_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        modules: state.modules.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_MODULE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_MODULE_DELETE:
    case types.API_V1_MODULE_DELETE_SUCCEEDED:
    case types.API_V1_MODULE_DELETE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_LIST:
    case types.API_V1_PAYMENTMETHOD_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        paymentMethods: [...state.paymentMethods, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_LIST_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_CREATE:
    case types.API_V1_PAYMENTMETHOD_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        paymentMethods: [...state.paymentMethods, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_CREATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_READ:
    case types.API_V1_PAYMENTMETHOD_READ_SUCCEEDED:
      return Object.assign({}, state, {
        paymentMethods: [
          ...state.paymentMethods.filter(
            record => record.id !== action.response.id
          ),
          action.response
        ]
      })
    case types.API_V1_PAYMENTMETHOD_READ_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_UPDATE:
    case types.API_V1_PAYMENTMETHOD_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        paymentMethods: state.paymentMethods.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_PAYMENTMETHOD_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE:
    case types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        paymentMethods: state.paymentMethods.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_DELETE:
    case types.API_V1_PAYMENTMETHOD_DELETE_SUCCEEDED:
    case types.API_V1_PAYMENTMETHOD_DELETE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_RECORDING_LIST:
    case types.API_V1_RECORDING_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        recordings: [...state.recordings, action.response]
      })
    case types.API_V1_RECORDING_LIST_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_RECORDING_CREATE:
    case types.API_V1_RECORDING_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        recordings: [...state.recordings, action.response]
      })
    case types.API_V1_RECORDING_CREATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_RECORDING_READ:
    case types.API_V1_RECORDING_READ_SUCCEEDED:
      return Object.assign({}, state, {
        recordings: [
          ...state.recordings.filter(
            record => record.id !== action.response.id
          ),
          action.response
        ]
      })
    case types.API_V1_RECORDING_READ_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_RECORDING_UPDATE:
    case types.API_V1_RECORDING_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        recordings: state.recordings.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_RECORDING_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_RECORDING_PARTIAL_UPDATE:
    case types.API_V1_RECORDING_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        recordings: state.recordings.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_RECORDING_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_RECORDING_DELETE:
    case types.API_V1_RECORDING_DELETE_SUCCEEDED:
    case types.API_V1_RECORDING_DELETE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_SIGNUP_CREATE:
    case types.API_V1_SIGNUP_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        signups: [...state.signups, action.response]
      })
    case types.API_V1_SIGNUP_CREATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTION_LIST:
    case types.API_V1_SUBSCRIPTION_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        subscriptions: [...state.subscriptions, action.response]
      })
    case types.API_V1_SUBSCRIPTION_LIST_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTION_CREATE:
    case types.API_V1_SUBSCRIPTION_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        subscriptions: [...state.subscriptions, action.response]
      })
    case types.API_V1_SUBSCRIPTION_CREATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTION_READ:
    case types.API_V1_SUBSCRIPTION_READ_SUCCEEDED:
      return Object.assign({}, state, {
        subscriptions: [
          ...state.subscriptions.filter(
            record => record.id !== action.response.id
          ),
          action.response
        ]
      })
    case types.API_V1_SUBSCRIPTION_READ_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTION_UPDATE:
    case types.API_V1_SUBSCRIPTION_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        subscriptions: state.subscriptions.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_SUBSCRIPTION_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTION_PARTIAL_UPDATE:
    case types.API_V1_SUBSCRIPTION_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        subscriptions: state.subscriptions.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_SUBSCRIPTION_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTION_DELETE:
    case types.API_V1_SUBSCRIPTION_DELETE_SUCCEEDED:
    case types.API_V1_SUBSCRIPTION_DELETE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTIONTYPE_LIST:
    case types.API_V1_SUBSCRIPTIONTYPE_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        subscriptionTypes: [...state.subscriptionTypes, action.response]
      })
    case types.API_V1_SUBSCRIPTIONTYPE_LIST_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTIONTYPE_CREATE:
    case types.API_V1_SUBSCRIPTIONTYPE_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        subscriptionTypes: [...state.subscriptionTypes, action.response]
      })
    case types.API_V1_SUBSCRIPTIONTYPE_CREATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTIONTYPE_READ:
    case types.API_V1_SUBSCRIPTIONTYPE_READ_SUCCEEDED:
      return Object.assign({}, state, {
        subscriptionTypes: [
          ...state.subscriptionTypes.filter(
            record => record.id !== action.response.id
          ),
          action.response
        ]
      })
    case types.API_V1_SUBSCRIPTIONTYPE_READ_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTIONTYPE_UPDATE:
    case types.API_V1_SUBSCRIPTIONTYPE_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        subscriptionTypes: state.subscriptionTypes.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_SUBSCRIPTIONTYPE_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTIONTYPE_PARTIAL_UPDATE:
    case types.API_V1_SUBSCRIPTIONTYPE_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        subscriptionTypes: state.subscriptionTypes.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_SUBSCRIPTIONTYPE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTIONTYPE_DELETE:
    case types.API_V1_SUBSCRIPTIONTYPE_DELETE_SUCCEEDED:
    case types.API_V1_SUBSCRIPTIONTYPE_DELETE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.REST_AUTH_LOGIN_CREATE:
    case types.REST_AUTH_LOGIN_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        logins: [...state.logins, action.response]
      })
    case types.REST_AUTH_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.REST_AUTH_LOGOUT_LIST:
    case types.REST_AUTH_LOGOUT_LIST_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_LIST_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.REST_AUTH_LOGOUT_CREATE:
    case types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_CREATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE:
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        passwordChanges: [...state.passwordChanges, action.response]
      })
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        passwords: [...state.passwords, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        passwordResetConfirms: [...state.passwordResetConfirms, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.REST_AUTH_REGISTRATION_CREATE:
    case types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        signups: [...state.signups, action.response]
      })
    case types.REST_AUTH_REGISTRATION_CREATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE:
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        verifyEmails: [...state.verifyEmails, action.response]
      })
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.REST_AUTH_USER_READ:
    case types.REST_AUTH_USER_READ_SUCCEEDED:
      return Object.assign({}, state, {
        userDetails: [
          ...state.userDetails.filter(
            record => record.id !== action.response.id
          ),
          action.response
        ]
      })
    case types.REST_AUTH_USER_READ_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.REST_AUTH_USER_UPDATE:
    case types.REST_AUTH_USER_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        userDetails: state.userDetails.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.REST_AUTH_USER_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    case types.REST_AUTH_USER_PARTIAL_UPDATE:
    case types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        userDetails: state.userDetails.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        expTrackerAPI: [...state.expTrackerAPI, action.response]
      })
    default:
      return state
  }
}
