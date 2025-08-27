import { primitiveColors } from "./Primitive";

export const lightColors = {
  "issue-todo": primitiveColors.neutral[500],
  "issue-progress": primitiveColors.purple[500],
  "issue-review": primitiveColors.yellow[500],
  "issue-done": primitiveColors.green[500],
  "issue-blocked": primitiveColors.red[500],
  "issue-draft": primitiveColors.neutral[400],

  "user-online": primitiveColors.green[500],
  "user-away": primitiveColors.yellow[500],
  "user-busy": primitiveColors.red[500],
  "user-offline": primitiveColors.neutral[400],
  "avatar-user": primitiveColors.neutral[900],

  "priority-lowest": primitiveColors.neutral[300],
  "priority-low": primitiveColors.neutral[400],
  "priority-medium": primitiveColors.yellow[500],
  "priority-high": primitiveColors.purple[600],
  "priority-highest": primitiveColors.red[600],
  "priority-critical": primitiveColors.red[700],

  "notification-unread": primitiveColors.purple[500],
  "notification-mention": primitiveColors.red[500],
  "notification-update": primitiveColors.green[500],
  "notification-comment": primitiveColors.yellow[500],

  "project-active": primitiveColors.purple[500],
  "project-archived": primitiveColors.neutral[400],
  "project-favorite": primitiveColors.yellow[500],
  "project-shared": primitiveColors.green[500],

  "bg-primary": primitiveColors.neutral[50],
  "bg-secondary": primitiveColors.common[0],
  "bg-sidebar": primitiveColors.neutral[100],

  "text-black": primitiveColors.neutral[900],
  "text-secondary": primitiveColors.neutral[600],
  "text-muted": primitiveColors.neutral[400],
  "text-primary": primitiveColors.purple[800],

  "border-light": primitiveColors.neutral[200],
  "border-medium": primitiveColors.neutral[300],
  "border-primary": primitiveColors.purple[800],

  "status-success": primitiveColors.green[500],
  "status-error": primitiveColors.red[500],
  "status-warning": primitiveColors.yellow[500],
  "status-info": primitiveColors.purple[500],

  "action-primary": primitiveColors.purple[800],
  "action-primary-hover": primitiveColors.purple[700],
  "action-primary-active": primitiveColors.purple[900],
  "action-secondary": primitiveColors.purple[200],
  "action-secondary-hover": primitiveColors.purple[300],
  "action-assistive": primitiveColors.common[0],
  "action-negative": primitiveColors.red[500],
  "action-negative-hover": primitiveColors.red[600],
  "action-important": primitiveColors.yellow[500],
  "action-important-hover": primitiveColors.yellow[600],

  "layout-sidebar-bg": primitiveColors.neutral[100],
  "layout-header-bg": primitiveColors.common[0],
  "layout-content-bg": primitiveColors.neutral[50],
  "layout-panel-bg": primitiveColors.common[0],
  "layout-divider": primitiveColors.neutral[200],
  "layout-sidebar-select": primitiveColors.purple[400],

  "select-btn-false": primitiveColors.neutral[400],
  "select-btn-true": primitiveColors.purple[800],
  "side-bar-color": primitiveColors.neutral[600],
  "default-icon": primitiveColors.neutral[800],

  "divider-archived": primitiveColors.neutral[200],

  "static-white": primitiveColors.common[0],
  "static-black": primitiveColors.common[1000],

  "header-tab-active": primitiveColors.neutral[100], // '#EDEEF1',
  "header-tab-not-active": primitiveColors.common[0], // '#FFFFFF',
  "header-tab-active-hover": primitiveColors.neutral[200],

  "code-bg": primitiveColors.neutral[50],

  // Calendar specific colors
  "border-calendar-DatePicker": primitiveColors.neutral[300],
  "calendar-hover-bg": primitiveColors.neutral[100],
  "calendar-active-bg": primitiveColors.purple[100],
  "calendar-disabled-text": primitiveColors.neutral[400],
  "calendar-date-selected": primitiveColors.purple[500],
  "calendar-date-selected-hover": primitiveColors.purple[600],
  "calendar-today-bg": primitiveColors.yellow[100],
} as const;
