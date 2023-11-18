import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
	return (
		<View style={styles.goalItem}>
			<Pressable
				android_ripple={{ color: "#dddddd" }}
				onPress={props.onDeleteItem}
				style={({ pressed }) => pressed && styles.pressedItem}>
				<Text style={styles.goalItemText}>{props.text}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	goalItem: {
		margin: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	pressedItem: {
		opacity: 0.5,
	},
	goalItemText: {
		padding: 8,
		color: "white",
	},
});

export default GoalItem;
