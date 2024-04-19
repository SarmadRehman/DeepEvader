import React from 'react';
import ContainedButton from '../../Common/Buttons/ContainedButton';
import { Data } from '../../../Data/Data';
import PlanWidget from './PlanWidget';
import { Zoom } from 'react-awesome-reveal';

const OurPlans: React.FC = () => {
  const [IsMonthlyPlan, Set_IsMonthlyPlan] = React.useState<boolean>(true);
  return (
    <div id='Plans' className={`w-full bg-OffWhite`}>
      <div
        className={`w-full max-w-[1320px] m-auto flex justify-center items-center flex-col md:px-6 px-4 py-10`}
      >
        <Zoom>
          <h1 className='md:text-[60px] md:leading-[61px] text-3xl text-blue-main font-Outfit font-semibold'>
            Our Plans
          </h1>
        </Zoom>
        <Zoom>
          <div className='flex justify-center items-center md:gap-6 gap-3 md:mt-6 mt-3'>
            <div onClick={() => Set_IsMonthlyPlan(true)}>
              <ContainedButton
                Text='Monthly'
                bg={IsMonthlyPlan ? 'bg-blue-main' : 'bg-black-secondary'}
              />
            </div>
            <div onClick={() => Set_IsMonthlyPlan(false)}>
              <ContainedButton
                Text='Annually'
                bg={IsMonthlyPlan ? 'bg-black-secondary' : 'bg-blue-main'}
              />
            </div>
          </div>
        </Zoom>
        {/* Plans widget */}
        {IsMonthlyPlan && (
          <Zoom>
            <PlanWidget
              pack={Data.Plans.monthly.package}
              plan={Data.Plans.monthly.plan}
              price={Data.Plans.monthly.price}
              features={Data.Plans.monthly.features}
              link={Data.Plans.monthly.Link}
            />
          </Zoom>
        )}
        {!IsMonthlyPlan && (
          <Zoom>
            <PlanWidget
              pack={Data.Plans.yearly.package}
              plan={Data.Plans.yearly.plan}
              price={Data.Plans.yearly.price}
              features={Data.Plans.yearly.features}
              link={Data.Plans.yearly.Link}
            />
          </Zoom>
        )}
      </div>
    </div>
  );
};

export default OurPlans;
