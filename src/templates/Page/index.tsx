import Header from 'components/Header'
import * as S from './styles'

export type PageProps = {
  children: React.ReactNode
  showDecoration?: boolean
  header?: boolean
}

const Page = ({ children, header, showDecoration = true }: PageProps) => (
  <S.Wrapper>
    {header && <Header />}
    {children}
    {showDecoration && (
      <S.Decoration>
        <svg
          viewBox="0 0 1024 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.77399 0H1024V700C1024 700 871.539 615.572 754.124 607.199C570.83 594.128 549.058 460.513 381.968 345.26C230.452 240.75 301.872 156.124 179.434 119.244C-52.4673 49.3942 6.77399 0 6.77399 0Z"
            fill="#04D361"
          />
          <path
            d="M852.896 264.021L715.588 530L365.292 463.562L364.601 463.434L344.746 459.667L255.523 442.742L235 438.852L263.438 381.036L268.235 371.286L272.742 362.135L273.148 361.303L280.698 345.954L312.609 281.086L314.211 277.824L316.436 273.306L316.947 272.266L318.085 269.946L324.56 256.788L336.198 233.136L338.225 229.014L347.423 210.31L382.012 140L852.896 264.021Z"
            fill="#3F3D56"
          />
          <path
            d="M537.868 244.9C522.324 229.338 501.241 220.594 479.258 220.594C457.275 220.594 436.193 229.338 420.648 244.9C405.104 260.463 396.371 281.57 396.371 303.579C396.371 325.588 405.104 346.696 420.648 362.258L537.868 479.617L655.089 362.258C670.633 346.696 679.366 325.588 679.366 303.579C679.366 281.57 670.633 260.463 655.089 244.9C639.544 229.338 618.462 220.594 596.479 220.594C574.495 220.594 553.413 229.338 537.868 244.9V244.9Z"
            fill="#04D361"
          />
          <path
            d="M290.857 479.362H287.372V480.525H290.857V479.362Z"
            fill="#D0CDE1"
          />
          <path d="M859 479.362H855.516V480.525H859V479.362Z" fill="#D0CDE1" />
          <path
            d="M364.514 463.702L364.601 463.434L366.268 458.358L344.746 459.667L364.514 463.702Z"
            fill="#FFB9B9"
          />
          <path
            d="M340.11 364.322L353.189 397.652C353.189 397.652 352 426.221 367.456 423.84C382.913 421.459 365.078 392.891 365.078 392.891L355.567 358.37C355.567 358.37 343.677 355.989 340.11 364.322Z"
            fill="#FFB9B9"
          />
          <path
            d="M318.114 257.785C329.934 257.785 339.515 248.192 339.515 236.358C339.515 224.525 329.934 214.932 318.114 214.932C306.295 214.932 296.713 224.525 296.713 236.358C296.713 248.192 306.295 257.785 318.114 257.785Z"
            fill="#FFB9B9"
          />
          <path
            d="M302.063 242.905C302.063 242.905 294.929 266.712 290.174 266.712C285.418 266.712 322.276 280.997 322.276 280.997C322.276 280.997 312.764 271.474 322.276 253.618L302.063 242.905Z"
            fill="#FFB9B9"
          />
          <path
            d="M364.514 463.701C364.775 463.655 365.037 463.608 365.292 463.562C371.541 462.434 375.525 461.102 375.78 459.55C376.274 456.579 372.035 441.038 366.918 423.904C361.181 404.711 354.346 383.519 351.814 375.734C351.175 373.763 350.809 372.652 350.809 372.652L348.521 358.32L346.053 342.896L287.794 358.373L279.472 372.652L277.701 377.827V377.833L275.094 385.467L269.954 400.508L255.523 442.741L344.746 459.666L364.514 463.701Z"
            fill="#2F2E41"
          />
          <path
            d="M297.308 264.332C297.308 264.332 313.794 268.714 318.629 273.665L327.032 278.616L337.732 301.233C337.732 301.233 346.055 304.804 346.055 320.279C346.055 335.753 357.945 361.941 357.945 361.941C357.945 361.941 366.267 369.083 360.322 372.655C354.378 376.226 347.244 376.226 347.244 376.226C347.244 376.226 353.189 353.609 341.299 352.418C329.409 351.228 323.465 350.038 322.276 352.418C321.087 354.799 288.985 389.32 275.906 385.749C262.828 382.177 269.961 346.467 269.961 346.467L280.662 263.141C280.662 263.141 288.985 261.951 293.741 263.141C298.497 264.332 297.308 264.332 297.308 264.332Z"
            fill="#575A89"
          />
          <path
            d="M256.883 364.322L269.961 397.652C269.961 397.652 268.772 426.221 284.229 423.84C299.685 421.459 281.851 392.891 281.851 392.891L272.339 358.37C272.339 358.37 260.45 355.989 256.883 364.322Z"
            fill="#FFB9B9"
          />
          <path
            d="M283.04 264.332L280.662 263.141C280.662 263.141 273.528 255.999 265.205 265.522C256.883 275.045 248.56 325.04 248.56 325.04V340.515C248.56 340.515 239.048 353.609 247.371 360.751C255.694 367.893 256.883 369.083 256.883 369.083C256.883 369.083 265.205 357.18 274.717 363.132L275.906 358.37C276.869 357.302 277.67 356.099 278.284 354.799C279.473 352.418 281.851 355.989 280.662 352.418C279.473 348.847 280.662 347.657 280.662 346.466C280.662 345.276 281.851 339.324 281.851 339.324L280.662 302.423L283.04 264.332Z"
            fill="#575A89"
          />
          <path
            d="M344.78 231.282C344.78 231.282 362.166 193.331 316.728 193.372C316.728 193.372 288.852 178.71 267.623 212.712L245.717 248.463L251.314 247.349L252.024 252.927L259.166 257.314L264.537 251.756L263.649 260.264L325.184 286.428C325.184 286.428 301.985 260.707 310.934 230.382L314.567 237.806L344.78 231.282Z"
            fill="#2F2E41"
          />
          <path
            d="M307.316 248.444C308.975 248.444 310.32 245.751 310.32 242.429C310.32 239.107 308.975 236.414 307.316 236.414C305.657 236.414 304.312 239.107 304.312 242.429C304.312 245.751 305.657 248.444 307.316 248.444Z"
            fill="#FFB9B9"
          />
        </svg>
      </S.Decoration>
    )}
  </S.Wrapper>
)

export default Page
