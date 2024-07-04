type WeatherInfoCardProps = {
    title: string;
    value: string;
  }
  
  const WeatherInfoCard = ({ title, value }: WeatherInfoCardProps) => (
    <div style={{ backgroundColor: '#1F1C36', color: 'white', padding: '20px', margin: '10px', textAlign: 'center', width: '200px', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{title}</div>
      <div>{value}</div>
    </div>
  );

  export default WeatherInfoCard;