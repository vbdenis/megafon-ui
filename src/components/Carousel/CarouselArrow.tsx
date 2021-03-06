import * as React from 'react';
import * as PropTypes from 'prop-types';
import { cnCreate } from '../../utils/cn';
import './CarouselArrow.less';
import Arrow from 'icons/System/16/Arrow_forward_16.svg';

interface ICarouselArrowProps {
    className: string;
    onClick: any;
}

const cn = cnCreate('mfui-carousel-arrow');
class CarouselArrow extends React.Component<ICarouselArrowProps> {
    static propTypes = {
        className: PropTypes.string,
        onClick: PropTypes.func,
    };

    render() {
        const { className, onClick } = this.props;

        return (
            <div className={cn('', {}, className)} onClick={onClick}>
                <div className={cn('arrow-icon')}><Arrow /></div>
            </div>
        );
    }
}

export default CarouselArrow;
