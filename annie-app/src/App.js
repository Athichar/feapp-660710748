import ProfileCard from './ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'ปวรภพ ตันไพบูลย์', nickname: 'ภพ',
    major: 'เคมี', favorites: ['ชนบท', 'ลาบ'] },
    { id: 2, name: 'อธิชา กิจเจริญ', nickname: 'แอนนี่',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ดนตรี', 'แมว'] },
    { id: 3, name: 'ณัฐภูมิ เนืองเนตร', nickname: 'ภูมิ',
    major: 'วิทยาการคอมพิวเตอร์', favorites: ['พิพิธภัณฑ์', 'แบรนด์เนม'] },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;