### What is Measured?

During the experiment, the following quantities are measured:

- Channel width,
- Flow depth,
- Volume of water collected,
- Collection time,
- Water level at different flow conditions.

These measurements are used to determine the discharge, average velocity, specific energy, and flow regime in the open channel.

### Why are these Measurements Important?

#### Channel Width and Flow Depth

These dimensions determine the cross-sectional area available for flow and influence the velocity and specific energy of the water.

#### Collected Volume and Time

These measurements determine the discharge through the channel.

#### Flow Depth

The flow depth is one of the most important parameters in open-channel hydraulics because it directly affects the specific energy and flow regime.

#### Specific Energy

The specific energy helps identify the critical flow condition and the operating characteristics of the channel.

#### Flow Regime

The Froude number indicates whether the flow is subcritical, critical, or supercritical.

### Sequential Calculations

#### Step 1

Calculate the discharge.

$$
Q=\frac{V}{t}
$$

#### Step 2

Calculate the flow area.

$$
A=by
$$

#### Step 3

Calculate the average velocity.

$$
V=\frac{Q}{A}
$$

#### Step 4

Calculate the specific energy.

$$
E=y+\frac{V^2}{2g}
$$

#### Step 5

Calculate the Froude number.

$$
Fr=\frac{V}{\sqrt{gy}}
$$

#### Step 6

Identify the flow regime.

- $Fr<1$ : Subcritical flow,

- $Fr=1$ : Critical flow,

- $Fr>1$ : Supercritical flow.

### Solved Numerical Example

Given,

Channel width,

$$
b=0.30\ m
$$

Flow depth,

$$
y=0.10\ m
$$

Collected volume,

$$
V=0.03\ m^3
$$

Time,

$$
t=20\ s
$$

Discharge,

$$
Q=\frac{0.03}{20}=0.0015\ m^3/s
$$

Flow area,

$$
A=0.30\times0.10=0.03\ m^2
$$

Average velocity,

$$
V=\frac{0.0015}{0.03}=0.05\ m/s
$$

Specific energy,

$$
E=0.10+\frac{0.05^2}{2\times9.81}
=0.1001\ m
$$

Froude number,

$$
Fr=\frac{0.05}{\sqrt{9.81\times0.10}}
=0.05
$$

The flow is subcritical.

### Observation Table

| Trial | Depth (m) | Discharge ($m^3/s$) | Velocity (m/s) | Specific Energy (m) | Froude Number | Flow Type   |
| ----- | --------: | ------------------: | -------------: | ------------------: | ------------: | ----------- |
| 1     |      0.06 |              0.0012 |          0.067 |              0.0602 |          0.09 | Subcritical |
| 2     |      0.08 |              0.0014 |          0.058 |              0.0802 |          0.07 | Subcritical |
| 3     |      0.10 |              0.0015 |          0.050 |              0.1001 |          0.05 | Subcritical |
| 4     |      0.12 |              0.0017 |          0.047 |              0.1201 |          0.04 | Subcritical |
| 5     |      0.14 |              0.0018 |          0.043 |              0.1401 |          0.04 | Subcritical |

### Interpretation

The observations show that the flow characteristics in an open channel depend strongly on the flow depth and discharge.

The specific energy varies with the depth of flow, and for a given discharge there exists a critical depth corresponding to the minimum specific energy.

The Froude number provides a convenient method for classifying the flow regime. In the present observations, the Froude number is less than unity, indicating subcritical flow.

The experiment demonstrates the principles of open-channel hydraulics and provides practical insight into the analysis and design of canals, spillways, and other free-surface flow systems.
