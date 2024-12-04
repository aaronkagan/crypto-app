export default function CoinPage({
  params: { coinType },
}: {
  params: { coinType: string };
}) {
  return <div>Coin: {coinType}</div>;
}
