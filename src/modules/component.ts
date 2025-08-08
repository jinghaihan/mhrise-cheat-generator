import type { App } from 'vue'
import {
  BellOutlined,
  CalculatorOutlined,
  CheckCircleOutlined,
  CloseCircleFilled,
  CompressOutlined,
  ExperimentOutlined,
  FormOutlined,
  FunctionOutlined,
  GithubOutlined,
  IdcardOutlined,
  MonitorOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons-vue'
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
  setupAntIcon(app)
  setupGlobComp(app)
}

export function setupAntIcon(app: App) {
  app.component('ShopOutlined', ShopOutlined)
  app.component('ExperimentOutlined', ExperimentOutlined)
  app.component('CalculatorOutlined', CalculatorOutlined)
  app.component('MonitorOutlined', MonitorOutlined)
  app.component('BellOutlined', BellOutlined)
  app.component('IdcardOutlined', IdcardOutlined)
  app.component('ShoppingCartOutlined', ShoppingCartOutlined)
  app.component('SettingOutlined', SettingOutlined)
  app.component('GithubOutlined', GithubOutlined)
  app.component('CloseCircleFilled', CloseCircleFilled)
  app.component('FormOutlined', FormOutlined)
  app.component('QuestionCircleOutlined', QuestionCircleOutlined)
  app.component('FunctionOutlined', FunctionOutlined)
  app.component('CheckCircleOutlined', CheckCircleOutlined)
  app.component('CompressOutlined', CompressOutlined)
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
