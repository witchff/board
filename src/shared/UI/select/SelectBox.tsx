import React, { SetStateAction } from 'react';
import styles from './Select.module.scss';

type SelectBoxProps = {
  defOption: string | null;
  open: boolean;
  setOpen: React.Dispatch<
    SetStateAction<boolean>
  >;
};

function SelectBox({
  defOption,
  open,
  setOpen,
}: SelectBoxProps): JSX.Element {
  return (
    <div
      onClick={() => setOpen(!open)}
      className={styles.box}
    >
      <span className={styles.defOption}>
        {defOption}
      </span>
      <svg
        className={`${styles.icon} ${
          open ? styles.activeArrow : ''
        }`}
        viewBox='0 -4.5 20 20'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        fill='#000000'
      >
        <g
          id='SVGRepo_bgCarrier'
          strokeWidth='0'
        ></g>
        <g
          id='SVGRepo_tracerCarrier'
          strokeLinecap='round'
          strokeLinejoin='round'
        ></g>
        <g id='SVGRepo_iconCarrier'>
          <g
            id='Page-1'
            stroke='none'
            strokeWidth='1'
            fill='none'
            fillRule='evenodd'
          >
            <g
              id='Dribbble-Light-Preview'
              transform='translate(-180.000000, -6684.000000)'
              fill='#000000'
            >
              <g
                id='icons'
                transform='translate(56.000000, 160.000000)'
              >
                <path
                  d='M144,6525.39 L142.594,6524 L133.987,6532.261 L133.069,6531.38 L133.074,6531.385 L125.427,6524.045 L124,6525.414 C126.113,6527.443 132.014,6533.107 133.987,6535 C135.453,6533.594 134.024,6534.965 144,6525.39'
                  id='arrow_down-[#339]'
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default SelectBox;
