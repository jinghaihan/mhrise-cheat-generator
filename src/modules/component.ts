import type { App } from 'vue'
import {
  Anchor,
  Badge,
  Button,
  Card,
  Checkbox,
  Col,
  Collapse,
  ConfigProvider,
  Drawer,
  Empty,
  FloatButton,
  Form,
  Input,
  InputNumber,
  Layout,
  Modal,
  Popconfirm,
  Popover,
  Row,
  Select,
  Space,
  Table,
  Tag,
  Tooltip,
  TreeSelect,
} from 'ant-design-vue'

import Action from '@/components/Action/index.vue'
import Icon from '@/components/Icon/index.vue'

export function install(app: App) {
  setupGlobComp(app)
}

export function setupGlobComp(app: App) {
  app.use(ConfigProvider)
  app.use(Layout)
  app.use(Button)
  app.use(Tooltip)
  app.use(Popover)
  app.use(Badge)
  app.use(Select)
  app.use(Drawer)
  app.use(Form)
  app.use(InputNumber)
  app.use(Table)
  app.use(Card)
  app.use(Space)
  app.use(Popconfirm)
  app.use(Collapse)
  app.use(Modal)
  app.use(Input)
  app.use(TreeSelect)
  app.use(Row)
  app.use(Col)
  app.use(Tag)
  app.use(FloatButton)
  app.use(Checkbox)
  app.use(Empty)
  app.use(Anchor)

  app.component('Icon', Icon)
  app.component('Action', Action)
}
