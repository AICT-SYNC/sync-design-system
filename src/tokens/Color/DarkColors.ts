import { primitiveColors } from "./Primitive";

export const darkColors: Record<string, string> = {
  "issue-todo": primitiveColors.neutral[50],
  "issue-progress": primitiveColors.purple[500],
  "issue-review": primitiveColors.yellow[500],
  "issue-done": primitiveColors.green[500],
  "issue-blocked": primitiveColors.red[500],
  "issue-draft": primitiveColors.neutral[100],

  "user-online": primitiveColors.green[500],
  "user-away": primitiveColors.yellow[500],
  "user-busy": primitiveColors.red[500],
  "user-offline": primitiveColors.neutral[400],
  "avatar-user": primitiveColors.neutral[900],

  "priority-lowest": primitiveColors.neutral[200],
  "priority-low": primitiveColors.neutral[300],
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

  "bg-primary": primitiveColors.neutral[950],
  "bg-secondary": primitiveColors.common[1000],
  "bg-sidebar": primitiveColors.neutral[900],

  "text-black": primitiveColors.neutral[50],
  "text-secondary": primitiveColors.neutral[200],
  "text-muted": primitiveColors.neutral[600],
  "text-primary": primitiveColors.purple[900],

  "border-light": primitiveColors.neutral[100],
  "border-medium": primitiveColors.neutral[50],
  "border-primary": primitiveColors.purple[800],

  "status-success": primitiveColors.green[500],
  "status-error": primitiveColors.red[600],
  "status-warning": primitiveColors.yellow[500],
  "status-info": primitiveColors.purple[500],

  "action-primary": primitiveColors.purple[800],
  "action-secondary": primitiveColors.purple[200],
  "action-assistive": primitiveColors.common[1000],
  "action-negative": primitiveColors.red[500],
  "action-important": primitiveColors.yellow[500],

  "layout-sidebar-bg": primitiveColors.neutral[900],
  "layout-header-bg": primitiveColors.common[1000],
  "layout-content-bg": primitiveColors.neutral[950],
  "layout-panel-bg": primitiveColors.common[1000],
  "layout-divider": primitiveColors.neutral[800],
  "layout-sidebar-select": primitiveColors.purple[700],

  "select-btn-false": primitiveColors.neutral[800],
  "select-btn-true": primitiveColors.purple[900],
  "side-bar-color": primitiveColors.neutral[400],
  "default-icon": primitiveColors.neutral[200],

  "divider-archived": primitiveColors.neutral[50],

  "static-white": primitiveColors.common[0],
  "static-black": primitiveColors.common[1000],

  "header-tab-active": "#383A42",
  "header-tab-not-active": "#1F2937",

  "code-bg": primitiveColors.neutral[50],
} as const;