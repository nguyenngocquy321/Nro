import Breadcrum from '@common/BreadCum/BreadCum';
import ItemsBlog from '@components/ItemsBlog/ItemsBlog';
import { Container } from 'react-bootstrap';
function TinTucGameNro() {
    return (
        <Container>
            <Breadcrum
                title={'Blog - TIN TỨC GAME NGỌC RỒNG'}
                desc={'Blog - TIN TỨC GAME NGỌC RỒNG'}
            />
            <ItemsBlog />
        </Container>
    );
}
export default TinTucGameNro;
