import { useState } from "react";
import {
	Button,
	Image,
	Modal,
	StyleSheet,
	TextInput,
	View,
} from "react-native";

function GoalInput(props) {
	const [goalText, setGoalText] = useState("");

	function goalInputHandler(enteredText) {
		setGoalText(enteredText);
	}

	function addGoalHandler() {
		props.onAddGoal(goalText);
		setGoalText("");
		props.closeModal();
	}

	return (
		<Modal visible={props.modalIsVisible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require("../assets/images/goal.png")}
				/>
				<TextInput
					value={goalText}
					style={styles.textInput}
					placeholder="You goal!"
					onChangeText={goalInputHandler}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							onPress={props.closeModal}
							title="Cancel"
							color={"#f31282"}
						/>
					</View>
					<View style={styles.button}>
						<Button
							onPress={addGoalHandler}
							title="Add Goal"
							color={"#b180f0"}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 16,
		backgroundColor: "#311b6b",
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		color: "#120438",
		borderRadius: 6,
		width: "100%",
		padding: 16,
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: "row",
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
});

export default GoalInput;
