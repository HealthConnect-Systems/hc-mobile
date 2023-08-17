import FontAwesome from '@expo/vector-icons/FontAwesome';
type Props = {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color?: string;
}
export const TabBarIcon = (props: Props) => {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}