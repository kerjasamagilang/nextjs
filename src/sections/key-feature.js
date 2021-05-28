/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Mengapa',
    title: 'Mengapa',
    text: 'Aku pergi hari ini untuk mencari kehidupan baru di dunia luar sana. Aku meninggalkan sejenak apa yang telah aku inginkan selama ini dengan kata lain melepas kejenuhan dari dunia yang fana.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'Kemana',
    text: 'Aku mendapatkan sebuah tawaran yang mungkin jika aku sebutkan kepada mereka, ini akan menjadi sebuah hal buruk. Dengan itu, aku simpan ini untuk alasan mengapa aku tidak memberi tahu kalian.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Pro Subscription',
    title: 'Maaf',
    text: 'Di dunia yang penuh aturan yang dijalani semua orang, ada beberapa aturan yang tak tertulis tapi jadi panutan, ada hal yang cuma cowo yang mengerti karena cowo punya cara main sendiri.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Saat ini',
    text: 'Aku terbawamu ke jalan lain untuk bernapas dalam sesuatu yang membuatku lebih segar, aku merasa lebih sulit untuk mengabaikan hal-hal yang saya inginkan untuk saat ini',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader slogan="Maaf, Aku Pergi" title="Aku tidak tahu kapan akan kembali" />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
