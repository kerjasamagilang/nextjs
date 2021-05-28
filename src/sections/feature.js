/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Sejatinya',
    text:
      'Saling berbagi tanpa rasa sanksi buat hidup semakin berarti, sahabat adalah keperluan jiwa untuk banyak jawaban dialah ladang hati dengan penuh rasa terima kasih.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Persahabatan',
    title: 'Persahabatan',
    text:
      'Ketulusan berbagi keceriaan membagi kala gelap sinari saat hampa penuhi imaji, pengalaman cerita saling menginspirasi ruang waktu kini bisa bicara fasih tentang manusia yang menggenggam perkataannya sampai mati.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Kebersamaan',
    title: 'Kebersamaan',
    text:
      'Demi sesuatu yang mulia sanggup menjadi relawan ataupun cinta seorang ayah tiri bukan hanya menyayangi sang istri menganggap sang anak seperti buah hatinya sendiri mendidiknya hingga dia meraih mimpi.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Kenangan',
    title: 'Kenangan',
    text:
      'sepanjang udara yang kita hirup pasti mempunyai makna seperti angin yang meniup. Banyak cara kita memberi kasih bukti bukan hanya kita bicara fasih seperti kamu tak membiarkan saudaramu dengan wajah pucat pasi.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader slogan="Bahu Membahu Sukses Menjulang" title="Saling Menolong Kebersamaan Mendulang Tiada Kata Sombong" />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
