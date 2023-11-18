import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const [goals, setGoals] = useState([]);

	function startAddGoal() {
		setModalIsVisible(true);
	}

	function endAddGoalHandler() {
		setModalIsVisible(false);
	}

	function addGoalHander(goalText) {
		setGoals((prev) => [
			{ content: goalText, id: Math.random().toString() },
			...prev,
		]);
	}

	function removeGoalHandler(id) {
		setGoals((prev) => prev.filter((item) => item.id !== id));
	}

	return (
		<>
			<StatusBar style="light" />
			<View style={styles.appContainer}>
				<Button onPress={startAddGoal} title="Add New Goal" color={"#a065ec"} />
				<GoalInput
					closeModal={endAddGoalHandler}
					modalIsVisible={modalIsVisible}
					onAddGoal={addGoalHander}
				/>
				<View style={styles.goalsContainer}>
					<FlatList
						data={goals}
						keyExtractor={(item, index) => item.id}
						renderItem={(itemData) => {
							return (
								<GoalItem
									text={itemData.item.content}
									onDeleteItem={() => removeGoalHandler(itemData.item.id)}
								/>
							);
						}}
						alwaysBounceVertical={false}
					/>
					{goals.length === 0 && <Text>No goals found! Add one</Text>}
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16,
	},
	goalsContainer: {
		flex: 4,
		marginBottom: 4,
	},
});
