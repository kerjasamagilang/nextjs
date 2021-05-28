/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaGoogle } from 'react-icons/fa';

import Member1 from 'assets/team/member-1.png';
import Member2 from 'assets/team/member-2.png';
import Member3 from 'assets/team/member-3.png';
import Member4 from 'assets/team/member-4.png';
import Member5 from 'assets/team/member-5.png';
import Member6 from 'assets/team/member-6.png';

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Bob Entis',
    title: 'Entis Sutisna',
    designation: 'Designer and Videographer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/100009565781284',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'whatsapp',
        path: 'https://wa.me/628779138984',
        icon: <FaWhatsapp />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/entis.76',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Sotart Sinaga',
    title: 'Sotar Sinaga',
    designation: 'Direktur KDM',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/sotar.sinaga',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'google',
        path: 'mailto:sotar@kdm.or.id',
        icon: <FaGoogle />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/sotarsinaga',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Beny Lumy',
    title: 'Beny Lumy',
    designation: 'CO-Founder of KDM',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/beny.lumy',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'google',
        path: 'mailto:benylumy@gmail.com/',
        icon: <FaGoogle />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/benylumy',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'Fathir Fitransyah',
    title: 'Fathir Fitransyah',
    designation: 'Designer Grafis',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/131100254962791',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'mailto:fathir.fitrayansyah@gmail.com',
        icon: <FaGoogle />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/fathir.fitransyah',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: 'Jesicca Hutting',
    title: 'Jessica Hutting',
    designation: 'Helping Rescue',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/jessica.hutting',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: 'https://www.twitter.com/jessicahutting',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/jessicahutting87',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: Member6,
    altText: 'Gracia Lestari',
    title: 'Gracia Lestari',
    designation: 'Education Development',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: 'https://www.facebook.com/gracious85',
        icon: <FaFacebookF />,
      },
      {
        // id: 2,
        // name: 'twitter',
        // path: 'https://www.twitter.com/',
        // icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: 'https://www.instagram.com/graciatindige',
        icon: <FaInstagram />,
      },
    ],
  },
];

export default function TeamSection() {
  return (
    <section>
      <Container>
        <SectionHeader
          slogan="Terima kasih kepada kakak-kakak"
          title="Salam hangat"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
