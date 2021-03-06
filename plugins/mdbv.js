import Vue from 'vue'

//nav
import {
    Accordion,
    AccordionPane,
    Alert,
    Badge,
    Breadcrumb,
    BreadcrumbItem,
    Btn,
    BtnGroup,
    BtnToolbar,
    Card,
    CardAvatar,
    CardBody,
    CardFooter,
    CardGroup,
    CardHeader,
    CardImg,
    CardText,
    CardTitle,
    CardUp,
    Carousel,
    CarouselCaption,
    CarouselIndicator,
    CarouselIndicators,
    CarouselInner,
    CarouselItem,
    CarouselNavigation,
    BarChart,
    DoughnutChart,
    LineChart,
    PieChart,
    PolarChart,
    RadarChart,
    BubbleChart,
    ScatterChart,
    HorizontalBarChart,
    Container,
    Collapse,
    Column,
    Datatable,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    EdgeHeader,
    Fa,
    Footer,
    FormInline,
    GoogleMap,
    Input,
    Jumbotron,
    ListGroup,
    ListGroupItem,
    MdMask,
    MdTextarea,
    Media,
    MediaBody,
    MediaImage,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalTitle,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarItem,
    NavbarNav,
    NumericInput,
    PageItem,
    PageNav,
    Pagination,
    Popover,
    Progress,
    Row,
    Tabs,
    Tab,
    TabContent,
    TabItem,
    TabPane,
    Tbl,
    TblBody,
    TblHead,
    Tooltip,
    ViewWrapper,
    waves,
    animateOnScroll,
    Scrollbar,
    // MDB FREE
    mdbAccordion,
    mdbAccordionPane,
    mdbAlert,
    mdbBadge,
    mdbBreadcrumb,
    mdbBreadcrumbItem,
    mdbBtn,
    mdbBtnGroup,
    mdbBtnToolbar,
    mdbCard,
    mdbCardAvatar,
    mdbCardBody,
    mdbCardFooter,
    mdbCardGroup,
    mdbCardHeader,
    mdbCardImage,
    mdbCardText,
    mdbCardTitle,
    mdbCardUp,
    mdbCarousel,
    mdbCarouselCaption,
    mdbCarouselControl,
    mdbCarouselIndicator,
    mdbCarouselIndicators,
    mdbCarouselInner,
    mdbCarouselItem,
    mdbBarChart,
    mdbDoughnutChart,
    mdbLineChart,
    mdbPieChart,
    mdbPolarChart,
    mdbRadarChart,
    mdbBubbleChart,
    mdbScatterChart,
    mdbHorizontalBarChart,
    mdbCol,
    mdbCollapse,
    mdbContainer,
    mdbDatatable,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbEdgeHeader,
    mdbIcon,
    mdbInput,
    mdbFooter,
    mdbFormInline,
    mdbGoogleMap,
    mdbJumbotron,
    mdbListGroup,
    mdbListGroupItem,
    mdbMask,
    mdbMedia,
    mdbMediaBody,
    mdbMediaImage,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbNumericInput,
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavItem,
    mdbPageItem,
    mdbPageNav,
    mdbPagination,
    mdbPopover,
    mdbProgress,
    mdbRow,
    mdbTabs,
    mdbTab,
    mdbTabContent,
    mdbTabItem,
    mdbTabPane,
    mdbTbl,
    mdbTblBody,
    mdbTblHead,
    mdbTextarea,
    mdbTooltip,
    mdbView,
    mdbScrollbar
} from 'mdbvue';


const components = {
    Accordion,
    AccordionPane,
    Alert,
    Badge,
    Breadcrumb,
    BreadcrumbItem,
    Btn,
    BtnGroup,
    BtnToolbar,
    Card,
    CardAvatar,
    CardBody,
    CardFooter,
    CardGroup,
    CardHeader,
    CardImg,
    CardText,
    CardTitle,
    CardUp,
    Carousel,
    CarouselCaption,
    CarouselIndicator,
    CarouselIndicators,
    CarouselInner,
    CarouselItem,
    CarouselNavigation,
    BarChart,
    DoughnutChart,
    LineChart,
    PieChart,
    PolarChart,
    RadarChart,
    BubbleChart,
    ScatterChart,
    HorizontalBarChart,
    Container,
    Collapse,
    Column,
    Datatable,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    EdgeHeader,
    Fa,
    Footer,
    FormInline,
    GoogleMap,
    Input,
    Jumbotron,
    ListGroup,
    ListGroupItem,
    MdMask,
    MdTextarea,
    Media,
    MediaBody,
    MediaImage,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalTitle,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarItem,
    NavbarNav,
    NumericInput,
    PageItem,
    PageNav,
    Pagination,
    Popover,
    Progress,
    Row,
    Tabs,
    Tab,
    TabContent,
    TabItem,
    TabPane,
    Tbl,
    TblBody,
    TblHead,
    Tooltip,
    ViewWrapper,
    waves,
    animateOnScroll,
    Scrollbar,
    // MDB FREE
    mdbAccordion,
    mdbAccordionPane,
    mdbAlert,
    mdbBadge,
    mdbBreadcrumb,
    mdbBreadcrumbItem,
    mdbBtn,
    mdbBtnGroup,
    mdbBtnToolbar,
    mdbCard,
    mdbCardAvatar,
    mdbCardBody,
    mdbCardFooter,
    mdbCardGroup,
    mdbCardHeader,
    mdbCardImage,
    mdbCardText,
    mdbCardTitle,
    mdbCardUp,
    mdbCarousel,
    mdbCarouselCaption,
    mdbCarouselControl,
    mdbCarouselIndicator,
    mdbCarouselIndicators,
    mdbCarouselInner,
    mdbCarouselItem,
    mdbBarChart,
    mdbDoughnutChart,
    mdbLineChart,
    mdbPieChart,
    mdbPolarChart,
    mdbRadarChart,
    mdbBubbleChart,
    mdbScatterChart,
    mdbHorizontalBarChart,
    mdbCol,
    mdbCollapse,
    mdbContainer,
    mdbDatatable,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbEdgeHeader,
    mdbIcon,
    mdbInput,
    mdbFooter,
    mdbFormInline,
    mdbGoogleMap,
    mdbJumbotron,
    mdbListGroup,
    mdbListGroupItem,
    mdbMask,
    mdbMedia,
    mdbMediaBody,
    mdbMediaImage,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbNumericInput,
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavItem,
    mdbPageItem,
    mdbPageNav,
    mdbPagination,
    mdbPopover,
    mdbProgress,
    mdbRow,
    mdbTabs,
    mdbTab,
    mdbTabContent,
    mdbTabItem,
    mdbTabPane,
    mdbTbl,
    mdbTblBody,
    mdbTblHead,
    mdbTextarea,
    mdbTooltip,
    mdbView,
    mdbScrollbar
}

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})